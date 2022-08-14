import { mount } from "@vue/test-utils";
import Subnav from "@/components/Navigation/Subnav";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const $route = {
        name: "JobResults",
      }
      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          }
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBeTruthy();
    });
  });

  describe("when user is not on job page", () => {
    it("does not displays job count", () => {
      const $route = {
        name: "Home",
      }
      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          }
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBeFalsy();
    });
  });
});
