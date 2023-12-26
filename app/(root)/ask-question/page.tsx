import Question from "@/components/forms/Question"
import React from "react"

const Page = () => {
  return (
    <div>
      <h1 className="h1-bold taxt-dark100_light900">
        Ask a question
      </h1>
     <div className="mt-9">
     <Question/>
      </div> 
    </div>
  )
}

export default Page
