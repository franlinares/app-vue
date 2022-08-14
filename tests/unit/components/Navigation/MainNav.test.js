import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  // const createConfig = () => ({
  //   global: {
  //     stubs: {
  //       "router-link": RouterLinkStub,
  //     }
  //   }
  // })
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        }
      }
    });
  })

  it("displays company name", () => {
    // const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("When user is logged out", () => {
    it("propmts user to sign in", () => {  
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBeTruthy();
    });
  });

  describe("When user logs in", () => {
    it("displays user profile picture", async () => {
      let profileImage = wrapper.findComponent({name: "ProfileImage"});
      expect(profileImage.exists()).toBeFalsy();

      const loginButton = wrapper.findComponent({name: "ActionButton"});
      await loginButton.trigger("click");

      profileImage = wrapper.findComponent({name: "ProfileImage"});
      expect(profileImage.exists()).toBeTruthy();
    });

    it("displays subnav with additional information", async () => {
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBeFalsy()

      const loginButton = wrapper.findComponent({name: "ActionButton"});
      await loginButton.trigger("click");

      subnav =  wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBeTruthy();
    })
  });
});
