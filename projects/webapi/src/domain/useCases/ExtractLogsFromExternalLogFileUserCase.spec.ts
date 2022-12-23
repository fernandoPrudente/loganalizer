import {assert} from 'chai'
import * as sinon from 'sinon'
import { Category } from '../entities/Category';
import { Log } from '../entities/Log';
import { CategoryRepository } from '../ports/driven/CategoryRepository';
import { LogRepository } from '../ports/driven/LogRepository';
import { ToLogsTraductor } from '../ports/driven/ToLogsTraductor';
import { ExtractLogsFromExternalLogFileUserCase } from './ExtractLogsFromExternalLogFileUserCase';

const categoryCodeToSucessTest: string = "10"
const categoryCodeToErrorTest: string = "15"

const categorySuccess = {
    code: categoryCodeToSucessTest,
    name: 'categoria 1'
} as Category

const logs = [{
    category: categorySuccess,
    text: 'XPTO'
}] as Log[]


const categoryRepositoryStub = sinon.stub({
    getByCode: async (code) => null
} as CategoryRepository)

const logRepositoryStub = sinon.stub({
    async createMany(logs) {

    }
} as LogRepository)


const toLogsTraductorStub = sinon.stub({
    GetLogs(category, externalFileContent) {
        return null
    }
} as ToLogsTraductor )

toLogsTraductorStub.GetLogs.returns(logs)


categoryRepositoryStub.getByCode
    .withArgs(categoryCodeToSucessTest)
        .returns(Promise.resolve(categorySuccess))
    .withArgs(categoryCodeToErrorTest)
        .returns(null)

const userCase = new ExtractLogsFromExternalLogFileUserCase(
    categoryRepositoryStub, 
    logRepositoryStub, 
    toLogsTraductorStub)

describe('ExtractLogsFromExternalLogFileUserCase Test', () => {

    describe('Extract needs success', () => {
        it('Should be call all dependency once', async () => {
            await userCase.extract(categoryCodeToSucessTest, ['aaa', 'bbb'])

            assert.isTrue(categoryRepositoryStub.getByCode.calledOnce) 
            assert.isTrue(toLogsTraductorStub.GetLogs.calledOnce)             
            assert.isTrue(logRepositoryStub.createMany.calledOnce)        
        });

        it('Should pass some categorie to log traductor', async () => {
            await userCase.extract(categoryCodeToSucessTest, ['aaa', 'bbb'])            

            const categorieToTest = toLogsTraductorStub.GetLogs.getCall(0).args[0]
            
            assert.equal(categorieToTest.code, categorySuccess.code)
        });

        it('Should pass to logRepository some logs returned by logsTraductor', async () => {
            await userCase.extract(categoryCodeToSucessTest, ['aaa', 'bbb']) 

            const logsToTest = logRepositoryStub.createMany.getCall(0).args[0]

            assert.equal(logsToTest[0].text, logs[0].text)
        })
    });

    //-- Testes de exceção, verificando se a aplicação está falhando quando deveria falhar e se está retornando a excecao correta.
    describe('Extract needs fail', () => {
        
    });
})