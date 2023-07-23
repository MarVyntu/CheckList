interface FetcherParams {
    url: string
    method: string
    body?: object
    json?: boolean
}
interface SignUpParams {
    name: string
    email: string
    password: string
}
interface SignInParams {
    email: string
    password: string
}
interface SendEmailParams {
    email: string
    code: string
}
const fetcher = async ({ url, method, body, json = true }: FetcherParams) => {
    const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    
    if (!res.ok) {
        throw new Error('API Error')
    }

    const data = json ? await res.json() : null
    return data
}

export const signup = (user: SignUpParams) => {
    return fetcher({ url: '/api/signup', method: 'post', body: user })
}

export const signin = (user: SignInParams) => {
    return fetcher({ url: '/api/signin', method: 'post', body: user })
}

export const logout = () => {
    return fetcher({ url: '/api/logout', method: 'post' })
}

export const sendEmail = (email: SendEmailParams) => {
    return fetcher({ url: '/api/sendemail', method: 'post', body: email, json: false })
}

export const checkList = () => {
    return fetcher({ url: '/api/checklist', method: 'get' })
}

export const createChecklist = (todo: any) => {
    return fetcher({ url: '/api/createChecklist', method: 'post', body: todo })
}


export const changeChecklistStatus = (id: any) => {
    return fetcher({ url: '/api/changeCheckliststatus', method: 'post', body: id })
}


// export const deleteChecklist = (id: string) => {
//     return fetcher({ url: `/api/deleteChecklist?id=${id}`, method: 'delete' })
//   }
  
export const deleteChecklist = (id: string) => {
    return fetcher({ url: `/api/deleteChecklist?id=${id}`, method: 'delete' })
}


  export const updateChecklist = (id: string, checklist: any) => {
    return fetcher({ url: `/api/updateChecklist`, method: 'put', body: { id, ...checklist } });
  }
  
  