function waitForElement(query, timeout = 300) {
  return new Promise((resolve, reject) => {
    let currentTime = 0;
    const period = 10;

    const timer = setInterval(() => {
      currentTime += period;

      if (currentTime > timeout) {
        clearInterval(timer);
        return reject(new Error(`${query} cannot find`));
      }
      this.update();
      const el = this.find(query);
      if (el.length > 0) {
        clearInterval(timer);
        resolve(el);
      }

    }, period);
  });
}

Enzyme.ShallowWrapper.prototype.waitForElement = waitForElement;
Enzyme.ReactWrapper.prototype.waitForElement = waitForElement;
