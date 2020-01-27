import isAuthenticated from "./withAuthentication";
import logger from "./logger";

test('It calls next()', () => {
    const next = jest.fn(x => x);
    logger({},{}, next);
    console.log(next.mock.calls);
    expect(next.mock.calls.length).toBe(1);
});

test('User is authenticated', () => {
    const next = jest.fn(x => x);
    const req = {};
    isAuthenticated(req, {}, next);
    expect(next.mock.calls.length).toBe(1);
    expect(typeof req.isAuthenticated === "boolean").toBe(true);
    expect(typeof req.isAdmin === "boolean").toBe(true);
});