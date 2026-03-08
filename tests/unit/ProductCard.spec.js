import { mount } from "@vue/test-utils"
import ProductCard from "@/components/ProductCard.vue"

describe("ProductCard.vue", () => {
  it("renders product name", () => {
    const product = {
      name: "Laptop",
      price: 1000
    }

    const wrapper = mount(ProductCard, {
      props: { product }
    })

    expect(wrapper.text()).toContain("Laptop")
  })
})