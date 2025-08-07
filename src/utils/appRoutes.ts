const DEPLOYMENT_LEVEL = process.env.DEPLOYMENT_LEVEL;

console.log(`The current environment is ${DEPLOYMENT_LEVEL}`);

const internalRoutes = {
  HOME: "/",
  ABOUT: "/#about",
  FEATURES: "/#features",
  FAQ: "/faq",
  MINI_FAQ: "/#FAQ",
  CONTACT_US: "/#contact-us",
  REQUEST_DEMO: "/#request-demo",
  PRIVACY_POLICY: "/privacy-policy",
  SIGN_UP: "/sign-up",
  PRICING: "/pricing",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  REFUND_POLICY: "/refund-policy",
  AGENT_TUTORIALS: "/tutorials/agent",
  ORGANISATION_TUTORIALS: "/tutorials/organisation",
  MEMBER_TUTORIALS: "/tutorials/member",
  DOCUMENTATION: "/documentation/membership",
  FORUM: "/forum",
  WHATS_NEW: "/whats-new",
  PARTNERSHIP: "/partnership",
  SPONSORSHIP: "/sponsorship",
  COOPERATIVE: "/cooperative",
  MEDIA: "/media",
  BLOG: "/blog",
  SUPPORT: "/support",
  EVENTS: "/events",
};

const externalRoutes =
  DEPLOYMENT_LEVEL === "development"
    ? {
        THIRD_PARTY_SIGN_UP:
          "https://organization-test.akilaah.com/docs/register",
        THIRD_PARTY_DOCS: "https://organization-test.akilaah.com/docs",
        ORG_SIGN_UP: "https://organization-test.akilaah.com/sign-up",
        MEMBER_SIGN_UP: "https://member-test.akilaah.com/sign-up",
        ORG_LOGIN: "https://organization-test.akilaah.com/login",
        MEMBER_LOGIN: "https://member-test.akilaah.com/login",
        AGENT_LOGIN: "https://agent-test.akilaah.com/login",
        AGENT_SIGN_UP: "https://agent-test.akilaah.com/sign-up",
        SPONSOR_LOGIN: "https://sponsor-test.akilaah.com/login",
        SPONSOR_SIGN_UP: "https://sponsor-test.akilaah.com/sign-up",
        BENEFICIARY_SIGN_UP: "https://beneficiary-test.akilaah.com/sign-up ",
      }
    : {
        THIRD_PARTY_SIGN_UP: "https://organization.akilaah.com/docs/register",
        THIRD_PARTY_DOCS: "https://organization.akilaah.com/docs",
        ORG_SIGN_UP: "https://organization.akilaah.com/sign-up",
        MEMBER_SIGN_UP: "https://member.akilaah.com/sign-up",
        ORG_LOGIN: "https://organization.akilaah.com/login",
        MEMBER_LOGIN: "https://member.akilaah.com/login",
        AGENT_LOGIN: "https://agent.akilaah.com/login",
        AGENT_SIGN_UP: "https://agent.akilaah.com/sign-up",
        SPONSOR_LOGIN: "https://sponsor.akilaah.com/login",
        SPONSOR_SIGN_UP: "https://sponsor.akilaah.com/sign-up",
        BENEFICIARY_SIGN_UP: "https://beneficiary.akilaah.com/sign-up",
      };

const navRoutes = [
  { label: "Customer Stories", link: "" },
  { label: "Pricing", link: "" },
  { label: "Blog", link: "" },
];

export { internalRoutes, externalRoutes, navRoutes };
