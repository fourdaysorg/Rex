/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';
import { Stuff } from './stuff';

@Info({title: 'StuffContract', description: 'My Smart Contract' })
export class StuffContract extends Contract {

    @Transaction(false)
    @Returns('boolean')
    public async stuffExists(ctx: Context, stuffId: string): Promise<boolean> {
        const buffer = await ctx.stub.getState(stuffId);
        return (!!buffer && buffer.length > 0);
    }

    @Transaction()
    public async createStuff(ctx: Context, stuffId: string, value: string): Promise<void> {
        const exists = await this.stuffExists(ctx, stuffId);
        if (exists) {
            throw new Error(`The stuff ${stuffId} already exists`);
        }
        const stuff = new Stuff();
        stuff.value = value;
        const buffer = Buffer.from(JSON.stringify(stuff));
        await ctx.stub.putState(stuffId, buffer);
    }

    @Transaction(false)
    @Returns('Stuff')
    public async readStuff(ctx: Context, stuffId: string): Promise<Stuff> {
        const exists = await this.stuffExists(ctx, stuffId);
        if (!exists) {
            throw new Error(`The stuff ${stuffId} does not exist`);
        }
        
        const buffer = await ctx.stub.getState(stuffId);
        const stuff = JSON.parse(buffer.toString()) as Stuff;
        return stuff;
    }

    @Transaction()
    public async updateStuff(ctx: Context, stuffId: string, newValue: string): Promise<void> {
        const exists = await this.stuffExists(ctx, stuffId);
        if (!exists) {
            throw new Error(`The stuff ${stuffId} does not exist`);
        }
        const stuff = new Stuff();
        stuff.value = newValue;
        const buffer = Buffer.from(JSON.stringify(stuff));
        await ctx.stub.putState(stuffId, buffer);
    }

    @Transaction()
    public async deleteStuff(ctx: Context, stuffId: string): Promise<void> {
        const exists = await this.stuffExists(ctx, stuffId);
        if (!exists) {
            throw new Error(`The stuff ${stuffId} does not exist`);
        }
        await ctx.stub.deleteState(stuffId);
    }

    @Transaction(false)
    public async getHistory(ctx: Context, stuffId: string): Promise<string> {
        let iter = await ctx.stub.getHistoryForKey(stuffId);
         return JSON.stringify( this.getAllResults(iter,true));
    }
    async getAllResults(iterator, isHistory) {
        let allResults = [];
        while (true) {
          let res = await iterator.next();
    
          if (res.value && res.value.value.toString()) {
            let jsonRes:any = {};
            console.log(res.value.value.toString('utf8'));
    
            if (isHistory && isHistory === true) {
              jsonRes.TxId = res.value.tx_id;
              jsonRes.Timestamp = res.value.timestamp;
              jsonRes.IsDelete = res.value.is_delete.toString();
              try {
                jsonRes.Value = JSON.parse(res.value.value.toString('utf8'));
              } catch (err) {
                console.log(err);
                jsonRes.Value = res.value.value.toString('utf8');
              }
            } else {
              jsonRes.Key = res.value.key;
              try {
                jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
              } catch (err) {
                console.log(err);
                jsonRes.Record = res.value.value.toString('utf8');
              }
            }
            allResults.push(jsonRes);
          }
          if (res.done) {
            console.log('end of data');
            await iterator.close();
            console.info(allResults);
            return allResults;
          }
        }
      }
}
