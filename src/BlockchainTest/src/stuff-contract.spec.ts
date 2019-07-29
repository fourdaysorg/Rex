/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context } from 'fabric-contract-api';
import { ChaincodeStub, ClientIdentity } from 'fabric-shim';
import { StuffContract } from '.';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import winston = require('winston');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext implements Context {
    public stub: sinon.SinonStubbedInstance<ChaincodeStub> = sinon.createStubInstance(ChaincodeStub);
    public clientIdentity: sinon.SinonStubbedInstance<ClientIdentity> = sinon.createStubInstance(ClientIdentity);
    public logging = {
        getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
        setLevel: sinon.stub(),
     };
}

describe('StuffContract', () => {

    let contract: StuffContract;
    let ctx: TestContext;

    beforeEach(() => {
        contract = new StuffContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"stuff 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"stuff 1002 value"}'));
    });

    describe('#stuffExists', () => {

        it('should return true for a stuff', async () => {
            await contract.stuffExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a stuff that does not exist', async () => {
            await contract.stuffExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createStuff', () => {

        it('should create a stuff', async () => {
            await contract.createStuff(ctx, '1003', 'stuff 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"stuff 1003 value"}'));
        });

        it('should throw an error for a stuff that already exists', async () => {
            await contract.createStuff(ctx, '1001', 'myvalue').should.be.rejectedWith(/The stuff 1001 already exists/);
        });

    });

    describe('#readStuff', () => {

        it('should return a stuff', async () => {
            await contract.readStuff(ctx, '1001').should.eventually.deep.equal({ value: 'stuff 1001 value' });
        });

        it('should throw an error for a stuff that does not exist', async () => {
            await contract.readStuff(ctx, '1003').should.be.rejectedWith(/The stuff 1003 does not exist/);
        });

    });

    describe('#updateStuff', () => {

        it('should update a stuff', async () => {
            await contract.updateStuff(ctx, '1001', 'stuff 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"stuff 1001 new value"}'));
        });

        it('should throw an error for a stuff that does not exist', async () => {
            await contract.updateStuff(ctx, '1003', 'stuff 1003 new value').should.be.rejectedWith(/The stuff 1003 does not exist/);
        });

    });

    describe('#deleteStuff', () => {

        it('should delete a stuff', async () => {
            await contract.deleteStuff(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a stuff that does not exist', async () => {
            await contract.deleteStuff(ctx, '1003').should.be.rejectedWith(/The stuff 1003 does not exist/);
        });

    });

});
