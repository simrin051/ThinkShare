import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to user are present here.
 * */

/**
 * This handler handles gets all users in the db.
 * send GET Request at /api/users
 * */

export const getAllUsersHandler = function () {
  return new Response(200, {}, { users: this.db.users });
};

/**
 * This handler handles get a user from userId in the db.
 * send GET Request at /api/users/:userId
 * */

export const getUserHandler = function (schema, request) {
  const username = request.params.username;
  try {
    const user = schema.users.findBy({ username }).attrs;
    console.log(" check for test user "+JSON.stringify(user));
    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating user details.
 * send POST Request at /api/users/edit
 * body contains { userData }
 * */

export const editUserHandler = function (schema, request) {
  let user = requiresAuth.call(this, request);
  console.log(" edit user data "+JSON.stringify(user));
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    console.log(" request request body "+JSON.stringify(request.requestBody));
    const { userData } = JSON.parse(request.requestBody);
    console.log(" user data "+JSON.stringify(userData));
    user = { ...user, ...userData, updatedAt: formatDate() };
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler gets all the user bookmarks from the db.
 * send GET Request at /api/users/bookmark/
 * */

export const getBookmarkPostsHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    return new Response(200, {}, { bookmarks: user.bookmarks });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
/**
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/bookmark/:postId/
 * */

export const bookmarkPostHandler = function (schema, request) {
  const { postId } = request.params;
  const post = schema.posts.findBy({ _id: postId }).attrs;
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const isBookmarked = user.bookmarks.some(
      (currPost) => currPost._id === postId
    );
    if (isBookmarked) {
      return new Response(
        400,
        {},
        { errors: ["This Post is already bookmarked"] }
      );
    }
    user.bookmarks.push(post);
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(200, {}, { bookmarks: user.bookmarks });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding a post to user's bookmarks in the db.
 * send POST Request at /api/users/remove-bookmark/:postId/
 * */

export const removePostFromBookmarkHandler = function (schema, request) {
  const { postId } = request.params;
  let user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const isBookmarked = user.bookmarks.some(
      (currPost) => currPost._id === postId
    );
    if (!isBookmarked) {
      return new Response(400, {}, { errors: ["Post not bookmarked yet"] });
    }
    const filteredBookmarks = user.bookmarks.filter(
      (currPost) => currPost._id !== postId
    );
    user = { ...user, bookmarks: filteredBookmarks };
    this.db.users.update(
      { _id: user._id },
      { ...user, updatedAt: formatDate() }
    );
    return new Response(200, {}, { bookmarks: user.bookmarks });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles follow action.
 * send GET Request at /api/users/unfollowed/:username/
 * */
export const getUnFollowedUserHandler = function (schema, request) {
  const { username } = request.params;
  console.log(" username "+username);
  const user = schema.users.findBy({ username }).attrs;
  console.log( " user followers "+user.following.length);
  const users = this.db.users;
  let unfollowedUsers;
  if(user.following.length==0)
    unfollowedUsers = users.filter(unFollowedUser=>unFollowedUser.username!=user.username);
  else {
    unfollowedUsers = users
    .filter(function(e1) {
      return e1.username!=user.username && !user.following.find(e2=>{
        return e2._id === e1._id  
      })
    })
  }
  return new Response(200, {}, { unfollowedUsers: unfollowedUsers.slice(0,3)});
}

/**
 * This handler handles follow action.
 * send POST Request at /api/users/follow/:followUserId/
 * */
export const followUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  const { followUserId } = request.params;
  const followUser = schema.users.findBy({ _id: followUserId }).attrs;
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const isFollowing = user.following.some(
      (currUser) => currUser._id === followUser._id
    );
     console.log(" is following "+isFollowing); 
    if (isFollowing) {
      return new Response(400, {}, { errors: ["User Already following"] });
    }

    const updatedUser = {
      ...user,
      following: [...user.following, { ...followUser }],
    };
    const updatedFollowUser = {
      ...followUser,
      followers: [...followUser.followers, { ...user }],
    };
    this.db.users.update(
      { _id: user._id },
      { ...updatedUser, updatedAt: formatDate() }
    );
    this.db.users.update(
      { _id: followUser._id },
      { ...updatedFollowUser, updatedAt: formatDate() }
    );
    return new Response(
      200,
      {},
      { user: updatedUser, followUser: updatedFollowUser }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles unfollow action.
 * send POST Request at /api/users/unfollow/:followUserId/
 * */

export const unfollowUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  const { followUserId } = request.params;
  const followUser = this.db.users.findBy({ _id: followUserId });
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: [
            "The username you entered is not Registered. Not Found error",
          ],
        }
      );
    }
    const isFollowing = user.following.some(
      (currUser) => currUser._id === followUser._id
    );

    if (!isFollowing) {
      return new Response(400, {}, { errors: ["User already not following"] });
    }

    const updatedUser = {
      ...user,
      following: user.following.filter(
        (currUser) => currUser._id !== followUser._id
      ),
    };
    const updatedFollowUser = {
      ...followUser,
      followers: followUser.followers.filter(
        (currUser) => currUser._id !== user._id
      ),
    };
    this.db.users.update(
      { _id: user._id },
      { ...updatedUser, updatedAt: formatDate() }
    );
    this.db.users.update(
      { _id: followUser._id },
      { ...updatedFollowUser, updatedAt: formatDate() }
    );
    return new Response(
      200,
      {},
      { user: updatedUser, followUser: updatedFollowUser }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

