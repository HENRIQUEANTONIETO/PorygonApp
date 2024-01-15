import { VueWrapper, mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";

test("Should resturn pokemon's id", async function () {
  const wrapper = mount(AppVue, {});
  await simulateWithRightData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeFalsy();
  expect(wrapper.get(".pokemon-id").text()).toBe("#25");
});

test("Should display error message for non-existent pokemon", async function () {
  const wrapper = mount(AppVue, {});
  await simulateWithWrongData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeTruthy();
  expect(wrapper.find(".pokemon-id").exists()).toBeFalsy();
});

test("Should clean id from previous search", async function () {
  const wrapper = mount(AppVue, {});
  await simulateWithRightData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeFalsy();
  expect(wrapper.get(".pokemon-id").text()).toBe("#25");

  await simulateWithWrongData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeTruthy();
  expect(wrapper.find(".pokemon-id").exists()).toBeFalsy();
});

test("Should clean error message from previous search", async function () {
  const wrapper = mount(AppVue, {});

  await simulateWithWrongData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeTruthy();
  expect(wrapper.find(".pokemon-id").exists()).toBeFalsy();

  await simulateWithRightData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeFalsy();
  expect(wrapper.get(".pokemon-id").text()).toBe("#25");
});

test("Should display pokemon moves", async function () {
  const wrapper = mount(AppVue, {});
  await simulateWithRightData(wrapper);
  expect(wrapper.find(".error-message").exists()).toBeFalsy();
  expect(wrapper.get(".pokemon-id").text()).toBe("#25");

  expect(wrapper.find(".pokemon-moves")).toBeTruthy();
  expect(wrapper.get(".pokemon-moves").get(".move-name-0").text()).toBe("Name");
  expect(wrapper.get(".pokemon-moves").get(".move-accuracy-0").text()).toBe(
    "Accuracy"
  );
  expect(wrapper.get(".pokemon-moves").get(".move-power-0").text()).toBe(
    "Power"
  );
  expect(wrapper.get(".pokemon-moves").get(".move-priority-0").text()).toBe(
    "Priority"
  );
  expect(wrapper.get(".pokemon-moves").get(".move-name-1").text()).toBe(
    "mega-punch"
  );
  expect(wrapper.get(".pokemon-moves").get(".move-accuracy-1").text()).toBe(
    "85"
  );
  expect(wrapper.get(".pokemon-moves").get(".move-power-1").text()).toBe("86");
  expect(wrapper.get(".pokemon-moves").get(".move-priority-1").text()).toBe(
    "0"
  );
});

async function simulateWithWrongData(wrapper: VueWrapper) {
  await wrapper.get(".pokemon-name-search").setValue("pichuleco");
  await wrapper.get(".pokemon-button-search").trigger("click");
  await sleep(1000);
}

async function simulateWithRightData(wrapper: VueWrapper) {
  await wrapper.get(".pokemon-name-search").setValue("pikachu");
  await wrapper.get(".pokemon-button-search").trigger("click");
  await sleep(1000);
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}
