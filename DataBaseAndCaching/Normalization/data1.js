const data = {
  users: [
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      posts: [
        {
          id: 3,
          title: "Post 3",
          content: "Content 3",
        },
        {
          id: 4,
          title: "Post 4",
          content: "Content 4",
        },
      ],
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@example.com",
      posts: [
        {
          id: 5,
          title: "Post 5",
          content: "Content 5",
        },
        {
          id: 6,
          title: "Post 6",
          content: "Content 6",
        },
      ],
    },
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      posts: [
        {
          id: 1,
          title: "Post 1",
          content: "Content 1",
        },
        {
          id: 2,
          title: "Post 2",
          content: "Content 2",
        },
      ],
    },
  ],
};

const normalizedData = {
  users: {
    byId: {
      1: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        posts: [1, 2],
      },
      2: {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        posts: [3, 4],
      },
      3: {
        id: 3,
        name: "John Smith",
        email: "john@example.com",
        posts: [5, 6],
      },
    },
    allIds: [2, 3, 1], // to maintain the order of the users
  },
  posts: {
    byId: {
      1: {
        userId: 1,
        id: 1,
        title: "Post 1",
        content: "Content 1",
      },
      2: {
        userId: 1,
        id: 2,
        title: "Post 2",
        content: "Content 2",
      },
      3: {
        userId: 2,
        id: 3,
        title: "Post 3",
        content: "Content 3",
      },
      4: {
        userId: 2,
        id: 4,
        title: "Post 4",
        content: "Content 4",
      },
      5: {
        userId: 3,
        id: 5,
        title: "Post 5",
        content: "Content 5",
      },
      6: {
        userId: 3,
        id: 6,
        title: "Post 6",
        content: "Content 6",
      },
    },
    allIds: [1, 2, 3, 4, 5, 6], // to maintain the order of the posts
  },
};
