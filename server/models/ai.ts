export interface aiMessage {
  action: string
  answer: string
}


export interface StudyPlan {
  topic: string
  date:Date
  user_id: number
  completed: boolean
}

export interface NewStudyData {
  data: string
  id: string
}