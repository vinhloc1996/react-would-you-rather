import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function LastSeen({ date }) {
  return (
    <span>
      Posted at <ReactTimeAgo date={date} locale="en-US"/>
    </span>
  )
}