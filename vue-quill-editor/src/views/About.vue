<template>
    <div class="about">
        <div>
            {{first_name}}
            {{name}}
        </div>
    </div>
</template>
<script>
    import mixin from '../mixin';

    export default {
        name: 'about',
        // mixins:[mixin(14)],
        data() {
            return {
                first_name: 'zhao',
                name: 'yinping'
            };
        },
        created() {
            // let promise = new Promise((res,rej) => {
            //   setTimeout(() => {
            //     console.log(1);
            //     res('success')
            //   },2000)
            // })
            // let start = Date.now()
            // console.log(start);
            // promise.then(res => {
            //   console.log(res, Date.now() - start);
            // });
            //回调地狱
            /*function f( time,callback) {
              setTimeout( () => {
                callback()
                setTimeout( () => {
                  callback()
                  setTimeout( () => {
                    callback()
                    setTimeout( () => {
                      callback()
                      setTimeout( () => {
                        callback()
                      },time)
                    },time)
                  },time)
                },time)
              },time)
            }
            f(2000,function () {
              console.log(123);
            })*/

            class Promises {
                constructor(executor) {
                    //初始化state为等待状态
                    this.state = 'pending';
                    //成功的值
                    this.value = undefined;
                    //失败的原因
                    this.reason = undefined;
                    let resolve = value => {
                        //state改变，resolve调用就会失败
                        if (this.state === 'pending') {
                            // resolve调用后,state转化为成功态
                            this.state = 'fulfilled'
                            //储存成功的值
                            this.value = value
                        }
                    };
                    let reject = reason => {
                        //state改变，reject调用就会失败
                        if (this.state === 'pending') {
                           //reject调用后，state转化为失败态
                            this.state = 'rejected'
                            //储存失败的原因
                            this.reject = 'reason'
                        }
                    };
                    //如果executor报错直接执行reject
                    try{
                        executor(resolve,reject)
                    }catch (e) {
                        reject(e)
                    }
                }
                // then 方法 有两个参数onFulfilled onRejected
                then(onFulfilled,onRejected){
                    // 状态为fulfilled，执行onFulfilled，传入成功的值
                    if(this.state === 'fulfilled'){
                        onFulfilled(this.value)
                    }
                    // 状态为rejected，执行onRejected，传入失败的原因
                    if(this.state === 'rejected'){
                        onRejected(this.reason)
                    }
                }
            }

            let promises = new Promises((res,rej) => {
                let num = Math.floor(Math.random()*10);
                if(num<5) {
                    res(num)
                }else{
                    rej(num)
                }
            })
        }
    };
</script>
