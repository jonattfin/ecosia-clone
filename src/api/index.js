class MockApi {
  fetchQueryResults(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([1, 2, 3]), 2000);
    })
  }
}

class Api {
  constructor(inner) {
    this.inner = inner;
  }

  fetchQueryResults(query) {
    return this.inner.fetchQueryResults(query);
  }
}

export default new Api(new MockApi())
