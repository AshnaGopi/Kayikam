import {supabase} from './Supabase'

export async function signUp({email, password, data}){
    delete data.password
    data.role = 'user'
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    },
    {
      data: data,
    })

    if(!error){
        const student = await supabase.from('student').insert([{ 
            id: user.id, 
            name: data.name,
            ktu_id: data.ktu_id,
            semester: data.semester,
            branch: data.branch,
            email: data.email,
            gender: data.gender
        }])

        if(student.error){
            return {
                error: student.error.message
            }
        }
    }

    return {
        user: user, 
        session: session, 
        error: error?.message
    }
}

export async function signIn({email, password}){
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    })

    return {
        user: user, 
        session: session, 
        error: error?.message
    }
}