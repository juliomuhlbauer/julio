import mixpanel from "mixpanel-browser";

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

isProd &&
  mixpanelToken &&
  mixpanel.init(mixpanelToken, {
    debug: isDev,
  });

export const track = (event: string) => {
  mixpanel.track(event);
};
