export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export const database = [
  {
    id: 1,
    name: "vitor",
    age: 20,
    native: true,
  },
  {
    id: 2,
    name: "kaue",
    age: 19,
    native: false,
  },
]
