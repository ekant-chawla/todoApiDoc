define({ "api": [
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/create",
    "title": "Create todo",
    "version": "1.0.0",
    "group": "Create",
    "description": "<p>Create a new todo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the todo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A descirption for the todo (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"completed\": false,\n        \"id\": \"ee68d1\",\n        \"description\": \"A todo application task list\",\n        \"title\": \"Make application\"\n    },\n    \"timestamp\": 1538403502923\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoCreate"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/createToDoItem",
    "title": "Create todo item",
    "version": "1.0.0",
    "group": "Create",
    "description": "<p>Create a todo item. Only the onwer of the todo can create items in todo. Friends can only update and edit items.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo in which the item is to be created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentItemId",
            "description": "<p>Id of the item in which this sub item should be created.(Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the todo item.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"a9d639\",\n        \"completed\": false,\n        \"deleted\": false,\n        \"title\": \"get bread 3\",\n        \"id\": \"b2d2bc\",\n        \"todoId\": \"c393ad\"\n    },\n    \"timestamp\": 1538242954394\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoCreatetodoitem"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/friend/sendRequest",
    "title": "Send friend request",
    "version": "1.0.0",
    "group": "Create",
    "description": "<p>Send request to other user on the platform by providing email id of the other user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Request sent.\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserFriendSendrequest"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/signup",
    "title": "Signup",
    "version": "1.0.0",
    "group": "Create",
    "description": "<p>Signup new user with a valid email id and password. Passowrd must be at least 8 characters.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User registered successfully.\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserSignup"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/list",
    "title": "List todo",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>List todo of a user or his friend.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user who's todos you want to list. If not provided will list the user's own todos (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>The page you want to get. Taken as 1 if not provided or less than 1.(Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Listing Todo\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"completed\": false,\n            \"id\": \"ee68d1\",\n            \"description\": \"A todo application task list\",\n            \"title\": \"Make application\"\n        }\n    ],\n    \"timestamp\": 1538403769022\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoList"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/listToDoItem",
    "title": "List todo item",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>Returns the queried item/todo and all it's sub items.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo from which the item</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentItemId",
            "description": "<p>Id of the item for which the list of sub-items is to be fetched. Leave if items do not have a parent item.(Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo item list.\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"\",\n        \"completed\": false,\n        \"deleted\": false,\n        \"title\": \"get items\",\n        \"id\": \"a9d639\",\n        \"userId\": \"18b851\",\n        \"todoId\": \"c393ad\",\n        \"list\": [\n            {\n                \"_id\": \"31a58c\",\n                \"id\": \"31a58c\",\n                \"todoId\": \"c393ad\",\n                \"parentItemId\": \"a9d639\",\n                \"completed\": true,\n                \"deleted\": false,\n                \"title\": \"get bread\"\n            }            \n        ]\n    },\n    \"timestamp\": 1538239852494\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoListtodoitem"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/friend/getRequestCount",
    "title": "Friend Request Count",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>Get pending requests count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Pending Friend Request Count\",\n    \"status\": 200,\n    \"data\":5,\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserFriendGetrequestcount"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/friend/listFriendRequests",
    "title": "List friend request",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>List pending friend requests in paginated form with max 10 items per page.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>The page you want to get. Taken as 1 if not provided or less than 1.(Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"success\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"sender\": {\n                \"lastName\": \"lastName\",\n                \"firstName\": \"testUser\",\n                \"userId\": \"99588b\"\n            }\n        }\n    ],\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserFriendListfriendrequests"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/friend/listFriends",
    "title": "List friends",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>List friends in paginated form with max 10 items per page.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>The page you want to get. Taken as 1 if not provided or less than 1.(Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"List of friends\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"friendId\": \"99588b\",\n            \"friend\": {\n                \"lastName\": \"lastName\",\n                \"firstName\": \"testUser\"\n            }\n        }\n    ],\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserFriendListfriends"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/login",
    "title": "Login",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>The login api of the application. Used to obtain the authToken for all other api.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User logged in\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Imxhc3ROYW1lIjoiIiwiZW1haWwiOiJla2FudC5jaGF3bGExQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkVrYW50IiwidXNlcklkIjoiZjVkNjk0In0sImV4cCI6MTUzNTUyMjQwOSwic3ViIjoiQXV0aFRva2VuIiwiaXNzIjoiQ2hhdEFwcCIsImlhdCI6MTUzNTQzNjAwOH0.q8TClbik4JhW1R75Q1wnNdCyznuGRUivHR1ZbI7B8Iw\",\n        \"userId\": \"f5d694\",\n        \"firstName\": \"Ekant\",\n        \"lastName\": \"\"\n    },\n    \"timestamp\": 1535436008861\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserLogin"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/notification/getCount",
    "title": "Unread Notification Count",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>Get unread notification count. All notifications are marked as read when you query notification list.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Listing Notification Count\",\n    \"status\": 200,\n    \"data\":5,\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserNotificationGetcount"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/notification/list",
    "title": "List Notification",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>List notifications in paginated form with max 10 items per page. All notifications are marked as read when you query this api.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>The page you want to get. Taken as 1 if not provided or less than 1.(Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Listing Notifications\",\n    \"status\": 200,\n    \"data\":[\n        {\n            \"read\": false,\n            \"type\": \"friend-add\",\n            \"userId\": \"99588b\",\n            \"targetId\": \"f52e86\",\n            \"message\": \"hi accepted your friend request.\",\n            \"title\": \"New Friend\"\n        },\n        {\n            \"read\": true,\n            \"type\": \"friend-request\",\n            \"userId\": \"99588b\",\n            \"targetId\": \"9abaf0\",\n            \"message\": \"You have received a new friend request from testUser.\",\n            \"title\": \"New Request\"\n        }\n    ],\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserNotificationList"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/closeItem",
    "title": "Close todo item",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Close a todo item.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo in which the item exists</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item to be closed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo item updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"\",\n        \"completed\": true,\n        \"deleted\": false,\n        \"title\": \"get bread 3\",\n        \"id\": \"116e56\",\n        \"todoId\": \"c393ad\",\n        \"updatedOn\": \"2018-09-29T07:59:09.716Z\"\n    },\n    \"timestamp\": 1538207949721\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoCloseitem"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/closeTodo",
    "title": "Close todo",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Close the todo item. Only works if there are no open todo items in the todo. Only the owner can close a todo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo updated to be closed.\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"f52e86\",\n        \"todoId\": \"ee68d1\",\n        \"completed\": true\n    },\n    \"timestamp\": 1538407535730\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoClosetodo"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/markItemDeleted",
    "title": "Delete todo item",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Delete a todo item.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo in which the item exists</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo item updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"a9d639\",\n        \"completed\": false,\n        \"deleted\": true,\n        \"title\": \"get bread\",\n        \"id\": \"31a58c\",\n        \"todoId\": \"c393ad\",\n        \"updatedOn\": \"2018-09-29T16:47:23.979Z\"\n    },\n    \"timestamp\": 1538239643984\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoMarkitemdeleted"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/openItem",
    "title": "Open todo item",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Open a todo item.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo in which the item exists</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item to be opened</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo item updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"\",\n        \"completed\": false,\n        \"deleted\": false,\n        \"title\": \"get bread 3\",\n        \"id\": \"116e56\",\n        \"todoId\": \"c393ad\",\n        \"updatedOn\": \"2018-09-29T07:59:09.716Z\"\n    },\n    \"timestamp\": 1538207949721\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoOpenitem"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/openTodo",
    "title": "Open todo",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Open the todo. Only the owner can open a todo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo updated to be open.\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"f52e86\",\n        \"todoId\": \"ee68d1\",\n        \"completed\": false\n    },\n    \"timestamp\": 1538407699891\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoOpentodo"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/renameItem",
    "title": "Rename Item",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Edit the name of the item.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo in which the item exists</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item to be renamed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>New title of the item</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo item updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"\",\n        \"completed\": false,\n        \"deleted\": false,\n        \"title\": \"Next task updated\",\n        \"id\": \"769c25\",\n        \"todoId\": \"ee68d1\"\n    },\n    \"timestamp\": 1538408868452\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoRenameitem"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/todo/undo",
    "title": "Undo",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Undo the last action on a todo. Only affects item. Returns the previous version of the item</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoId",
            "description": "<p>Id of the todo in which the item exists</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Todo item updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"parentItemId\": \"\",\n        \"completed\": true,\n        \"deleted\": false,\n        \"title\": \"get bread 3\",\n        \"id\": \"116e56\",\n        \"todoId\": \"c393ad\"\n    },\n    \"timestamp\": 1538224945488\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/todoRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1TodoUndo"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/forgotPass",
    "title": "Password reset",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Send password reset email to the user on the registered email id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Registered email of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n \"error\": false,\n \"message\": \"Password reset email sent.\",\n \"status\": 200,\n \"data\": null,\n \"timestamp\": 1535436008861\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"internal server error\",\n     \"status\": 500,\n     \"data\": null\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserForgotpass"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/friend/acceptRequest",
    "title": "Accept Friend Request",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Accept friend request of other user and add them as your friend.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token provided when the user logins on the platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the person who's request you want to accept. Provided as part of request list.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Friend added.\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserFriendAcceptrequest"
  },
  {
    "type": "post",
    "url": "http://todoapi.ekantchawla.me/api/v1/user/updatePass",
    "title": "Update password",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Reset the password of the user using the password reset url.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Password reset auth token provided at the end of the password reset url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Password updated\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1535436008861\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"internal server error\",\n        \"status\": 500,\n        \"data\": null\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpTodoapiEkantchawlaMeApiV1UserUpdatepass"
  }
] });
