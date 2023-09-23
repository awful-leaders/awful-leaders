import Hr from '@/components/hr.mdx'
import { AWFUL_LEADERS_LIST } from '@/components/list'
import React, { Fragment } from 'react';

export default function AwfulLeadersList() {
  return <>
    <h1>Awful Leaders List</h1>
    {AWFUL_LEADERS_LIST.map((leader, idx) => (
        <Fragment key={`leader-${idx}`}>
          {React.createElement(leader, {})}
          {idx < AWFUL_LEADERS_LIST.length - 1 ? <Hr /> : null}
        </Fragment>
    ))}
  </>
}
