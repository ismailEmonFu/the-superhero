import React from 'react';

const Delegate = (props) => {

    // console.log(props);
    const { delegates, name } = props;
    console.log(name);
    let total = 0;
    for (const delegate of delegates) {
        total = total + delegate.salary;
    }

    return (
        <>
            <div>
                <h3>Total Summery</h3>
                <h3>Total Author: {props.delegates.length}</h3>
                <br />
                <h4>Total delegation fee: {total} $</h4>
                <br />
                {
                    delegates.map(delegateSingle => <h5>{delegateSingle.name}<br /></h5>)
                }
            </div>
        </>
    );
};

export default Delegate;