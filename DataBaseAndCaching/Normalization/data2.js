const data = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      posts: [
        {
          id: 1,
          title: "Post 1",
          comments: [
            {
              id: 1,
              content: "Comment 1",
            },
            {
              id: 2,
              content: "Comment 2",
            },
          ],
        },
        {
          id: 2,
          title: "Post 2",
          comments: [
            {
              id: 3,
              content: "Comment 3",
            },
            {
              id: 4,
              content: "Comment 4",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      posts: [
        {
          id: 3,
          title: "Post 3",
          comments: [
            {
              id: 5,
              content: "Comment 5",
            },
            {
              id: 6,
              content: "Comment 6",
            },
          ],
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
        posts: [3],
      },
    },
    allIds: [1, 2],
  },
  posts: {
    byId: {
      1: {
        id: 1,
        title: "Post 1",
        comments: [1, 2],
      },
      2: {
        id: 2,
        title: "Post 2",
        comments: [3, 4],
      },
    },
    allIds: [1, 2],
  },
  comments: {
    byId: {
      1: {
        id: 1,
        content: "Comment 1",
      },
      2: {
        id: 2,
        content: "Comment 2",
      },
      3: {
        id: 3,
        content: "Comment 3",
      },
      4: {
        id: 4,
        content: "Comment 4",
      },
      5: {
        id: 5,
        content: "Comment 5",
      },
      6: {
        id: 6,
        content: "Comment 6",
      },
    },
    allIds: [1, 2, 3, 4, 5, 6],
  },
};
