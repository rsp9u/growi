function omitInsecureAttributes(user) {
  // omit password
  delete user.password;
  // omit apiToken
  delete user.apiToken;

  // omit email
  if (!user.isEmailPublished) {
    delete user.email;
  }
  return user;
}

function serializeUserSecurely(user) {
  let serialized = user;

  // invoke toObject if page is a model instance
  if (user.toObject != null) {
    serialized = user.toObject();
  }

  if (serialized._id) {
    serialized.id = serialized._id;
  }

  omitInsecureAttributes(serialized);

  return serialized;
}

module.exports = {
  omitInsecureAttributes,
  serializeUserSecurely,
};
