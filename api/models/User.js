var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    birthday  : { type: 'date' },
    bio       : { type: 'string' },
    location  : { type: 'string' },
    hometown  : { type: 'string' },
    passports : { collection: 'Passport', via: 'user' },
    keys      : { collection: 'Key', via: 'user' }
  }
};

module.exports = User;
