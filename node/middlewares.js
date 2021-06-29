// middleware pattern (chain of responsibility);

const pass1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const pass2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const pass3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx,pass1, pass2, pass3)
console.log(ctx)