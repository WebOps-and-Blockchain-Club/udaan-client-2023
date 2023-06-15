import React from 'react';

const Rule = () => {
  return (
    <div className='rule'>
       <hr className="red" />
              <hr className="indigo"/>
              <hr className="blue" />
              <style jsx>{
                `.rule{
                    display:flex;
                    justify-content: flex-start;
                    margin:auto;
                    padding:0px 20%

                }
                .red{
                    width: 3rem;
                    margin: 2px 1px;
                    height: 0px;
                    border: 3px solid red;
                    border-radius: 50px 50px;
                  }
                  .indigo{
                    width: 3rem;
                    margin: 2px 1px;
                    border: 3px solid #29166F;
                    border-radius: 50px 50px;
                  }
                  .blue{
                    width: 3rem;
                    margin: 2px 1px;
                    background-color: rgb(10, 10, 10);
                    border: 3px solid #0093DD;
                    border-radius: 50px 50px;
                  }`
              }

              </style>
    </div>
  );
}

export default Rule;
