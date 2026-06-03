const COUNTER_API_BASE_URL = "https://api.counterapi.dev/v1";
const BLOG_VIEW_COUNTER_NAMESPACE =
  process.env.BLOG_VIEW_COUNTER_NAMESPACE ?? "ayush-portfolio-blog-views";

type CounterResponse = {
  count?: number;
  value?: number;
  data?: {
    count?: number;
    value?: number;
  };
};

// Blogger's public post resource does not expose per-post views, so we track
// opens from this portfolio and show that count on each card.
const getCounterName = (postId: string) => `blog-post-${postId}`;

const getCounterValue = (payload: CounterResponse) => {
  const possibleValues = [
    payload.count,
    payload.value,
    payload.data?.count,
    payload.data?.value,
  ];

  const matchedValue = possibleValues.find(
    (value) => typeof value === "number" && Number.isFinite(value)
  );

  return matchedValue ?? 0;
};

const requestCounter = async (postId: string, action: "get" | "up") => {
  const namespace = encodeURIComponent(BLOG_VIEW_COUNTER_NAMESPACE);
  const counterName = encodeURIComponent(getCounterName(postId));
  const cacheBuster = `ts=${Date.now()}`;
  const counterUrl =
    action === "up"
      ? `${COUNTER_API_BASE_URL}/${namespace}/${counterName}/up?${cacheBuster}`
      : `${COUNTER_API_BASE_URL}/${namespace}/${counterName}/?${cacheBuster}`;

  try {
    const response = await fetch(counterUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      return 0;
    }

    const payload = (await response.json()) as CounterResponse;
    return getCounterValue(payload);
  } catch (error) {
    console.error(`Failed to ${action} blog view counter for ${postId}:`, error);
    return 0;
  }
};

export const getBlogViewCount = async (postId: string) =>
  requestCounter(postId, "get");

export const incrementBlogViewCount = async (postId: string) =>
  requestCounter(postId, "up");

export const getBlogViewCounts = async (postIds: string[]) => {
  const countEntries = await Promise.all(
    postIds.map(async (postId) => [postId, await getBlogViewCount(postId)] as const)
  );

  return Object.fromEntries(countEntries);
};
