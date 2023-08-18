import Card from "./Card.jsx"

const FaqList = ({ data }) => {
  return (
    <div className={"divide-y divide-light-grayish-blue"}>
      {data && data.map((item) => <Card key={item.id} title={item.title} content={item.content} />)}
      <div className={"mx-6 lg:mx-0"}></div>
    </div>
  )
}

export default FaqList
