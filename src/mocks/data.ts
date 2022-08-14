import Comida1 from "@/assets/comida_1.svg"
import Comida2 from "@/assets/comida_2.svg"
import Comida3 from "@/assets/comida_3.svg"
import Comida4 from "@/assets/comida_4.svg"

import Post1 from "@/assets/blog_image_1.svg"
import User1 from "@/assets/user1.svg"
import Post2 from "@/assets/blog_image_2.svg"
import User2 from "@/assets/user2.svg"
import Post3 from "@/assets/blog_image_3.svg"
import User3 from "@/assets/user3.svg"
import Post4 from "@/assets/blog_image_4.svg"
import User4 from "@/assets/user4.svg"

export const data = {
  header: {
    logo: "Healthy Food",
    menu: [
      {
        id: 1,
        go: "recipes",
        title: "HEALTHY RECIPES",
      },
      {
        id: 2,
        go: "blog",
        title: "BLOG",
      },
      {
        id: 3,
        go: "join",
        title: "JOIN",
      },
    ],
    register: "REGISTER",
  },
  newRecipe: {
    title: "Ready for Trying a new recipe?",
    placeholder: "Search healthy recipes",
  },
  recipes: {
    title: "Our Best Recipes",
    desc: "Far far away, behind the mountains, far from the countries Vakalia and Consonantia, there live the blind texts.",
    items: [
      {
        id: 1,
        image: Comida1,
        title: "Broccoli Salad with Bacon",
        buttonText: "See Recipe"
      },
      {
        id: 2,
        image: Comida2,
        title: "Classic Beef Burgers",
        buttonText: "See Recipe"
      },
      {
        id: 3,
        image: Comida3,
        title: "Classic Potato Salad",
        buttonText: "See Recipe"
      },
      {
        id: 4,
        image: Comida4,
        title: "Cherry Cobbler on the Grill",
        buttonText: "See Recipe"
      },
    ],
  },
  serve: {
    title: "The best services ready To serve you",
    more: "Know More",
    items: [
      {
        id: 1,
        text: "Far far away, behind the word moutains, faar from the countries Vakalia and Consonantia, there live the blind texts.",
      },
      {
        id: 2,
        text: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      },
      {
        id: 3,
        text: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
      }
    ], 
  },
  blog: {
    title: "Read Our Blog",
    desc: "Far far way, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    posts: [
      {
        id: 1,
        blogImage: Post1,
        userImage: User1,
        title: "Quick-start guide to nuts and seeds",
        name: "Kevin Ibrahim",
      },
      {
        id: 2,
        blogImage: Post2,
        userImage: User2,
        title: "Nutrition: Tips for Improving Your Health",
        name: "Mike Jackson",
      },
      {
        id: 3,
        blogImage: Post3,
        userImage: User3,
        title: "The top 10 benefits of eating healthy",
        name: "Bryan McGregor",
      },
      {
        id: 4,
        blogImage: Post4,
        userImage: User4,
        title: "What Makes a Healthy Diet",
        name: "Jashua",
      },
    ]
  },
  join: {
    title: "Join our membership to get special offer",
    placeholder: "Enter your email address",
    button: "Join",
  }
}
