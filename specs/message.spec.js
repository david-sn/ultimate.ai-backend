const userService = require('../routes/message-details/message.service');
const controller = require('../routes/message-details/message.controller');



describe('Ultimate AI bot', () => {
    

    it('create new messaege with valid request', async () => {
        let req = {
            body: {
                "botId": "5f74865056d7bb000fcd39ff",
                "message": "I can't sign in"
            }
        };
        const res = mockResponse();
        await controller.sendMessage(req, res, (mockResponse) => {
            expect(mockResponse.status).toBe(200);
            expect(mockResponse.result.name).toBe(`Login problems`);
            expect(mockResponse.result.confidence).toBe(0.9692836403846741);
        });
    });

    it('create message with missing param', async () => {
        let req = {
            body: {
                "message": "I can't sign in"
            }
        };
        const res = mockResponse();
        await controller.sendMessage(req, res, (mockResponse) => {
            expect(mockResponse.info.code).toBe(400);
            expect(mockResponse.info.name).toBe("Bad Request");
        });
    });


});

const mockResponse = () => {
    const res = {};
    // eslint-disable-next-line no-undef
    res.status = jest.fn().mockReturnValue(res);
    // eslint-disable-next-line no-undef
    res.json = jest.fn().mockReturnValue(res);
    return res;
};
