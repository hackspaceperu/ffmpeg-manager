const ManagerController = require('../controllers/managerController')

// describe("ManagerControllerTest", () => {
//   test("Should create mosaic", () => {});
// });

const manager = new ManagerController()

const params = {
  files: ['url'],
  duration: 1230
}

manager.createMosaic(params)
