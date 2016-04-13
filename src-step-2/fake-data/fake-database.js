const users = [];

module.exports = {
  save: function(collectionName, data, cb) {
    if (typeof collectionName !== 'string') {
      cb("O parâmetro collectionName é obrigatório.", null);
      return;
    }
    else if (!data) {
      cb("O parâmetro data é obrigatório.", null);
      return;
    }

    if (Array.isArray(this[collectionName])) {
      this[collectionName].push(data);
      data.id = this[collectionName].length;
    }
    else {
      this[collectionName] = [];
      this[collectionName].push(data);
      data.id = this[collectionName].length;
    }

    cb(null, data);
  },
  get: function(collectionName, cb) {
    console.log("collectionName", collectionName);
    if (typeof collectionName !== 'string') {
      cb("O parâmetro collectionName é obrigatório.", null);
      return;
    }

    var data = this[collectionName] || [];
    cb(null, data.slice());
  }
};
