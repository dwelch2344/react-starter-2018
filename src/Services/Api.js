// a library to wrap and simplify api calls
import apisauce from 'apisauce'


class Api { 
  constructor(baseURL){
    if( !baseURL ){
      throw new Error('No BaseURL provided; please contact support')
    }
    this.api = apisauce.create({
      baseURL,
      headers: {
        'Cache-Control': 'no-cache'
      },
      // timeout: 100000
    })
  }
  setToken = token => {
    if( token ){
      this.api.setHeader('Authorization', `Bearer ${token}`)
    }else {
      this.api.deleteHeader('Authorization')
    }
  }

  login = (email, password) => this.api.post('/auth', {email, password})

  calls = {
    feedback: payload => this.api.post('/user/call/log', payload),
  }

  tasks = {
    fetch: () => this.api.get('/tasks'),
    create: payload => this.api.post('/tasks', payload),    
    complete: taskId => this.api.put(`/tasks/${taskId}/complete`),    
    snooze: taskId => this.api.put(`/tasks/${taskId}/snoozeDueDate`),    
  }

  leads = {
    paged: (cursor=0, limit=1000, args='sort=name|desc') => this.api.get(`/leads?cursor=${cursor}&limit=${limit}&${args}`),
    timeline: leadId => this.api.get(`/leads/${leadId}/timeline`),
    alerts: leadId => this.api.get(`/leads/${leadId}/alerts`),
  }
}

export class ApiError extends Error {  
  constructor(message, response){
     super(message)
     this.response = response
  }
}

// let's return back our create method as the default.
export default {
  create: (baseURL) => new Api(baseURL)
}
