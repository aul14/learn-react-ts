import React, { useState } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setsearch] = useState("");

    const onClick = (e: any) => {
        setsearch(e.target.value);
        console.log(e);
    }
  return (
    <div>
        <input value={search} onChange={(e) => onClick(e)}></input>
    </div>
  )
}

export default Search