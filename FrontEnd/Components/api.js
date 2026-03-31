import toast from "react-hot-toast"
export let loggedIn=false;

export const callSign =(async(username,email,password)=>{
    try{
        const response= await fetch('api/auth/signup',
    {
        
        method: 'POST', 
        headers: {      
                'Content-Type': 'application/json' 
            },
        body: JSON.stringify({
            username,email,password

        })})
        console.log(response)
        if (response.status=='401') {
        throw new Error('Password Wrong'); 
        
    }
            if (response.status=='400') {
        throw new Error('Missing Input field');
    }
    
    toast.success('Successfully Logged in!');
    loggedIn=true

    }catch(error){
        toast.error(error.message || 'Something went wrong');
        
    }
    
    


}
)
export const callLogin=(async (identifier,password)=>
    {
        try{
            const response = await fetch('api/auth/login',
        {
            method: 'POST', 
            headers: {      
                'Content-Type': 'application/json' 
                },
            body: JSON.stringify({
                identifier,password})  
    })
    console.log(response)
            if (response.status=='401') {
        throw new Error('User does not exist or Wrong Credentials'); 
    }
            if (response.status=='400') {
        throw new Error('Missing Input field');
    }
    
    toast.success('Successfully Loged in!');
        const data=await response.json();
        const token=data.access_token
        localStorage.setItem("token",token)
        return data


        }catch(error)
        {
            toast.error(error.message || 'Something went wrong');
        }


    
    })
export const viewProfile=(async()=>
    {
        const token=localStorage.getItem("token")
        const response=await fetch('api/auth/me',
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        return data
        
    })
export const createCommunity=(async(name,description)=>
    {
        const token=localStorage.getItem("token")
        const response=await fetch('api/communities',
            {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({
            name,description
        })

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })
export const viewCommunities=(async()=>
    {
        const token=localStorage.getItem("token")
        
        const response=await fetch('api/communities',
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })
export const joinCommunity=(async(id)=>
    {
        const token=localStorage.getItem("token")
        
        const response=await fetch(`api/communities/${id}/join`,
            {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })
export const createPost=(async(id,title,Content)=>
    {
        const token=localStorage.getItem("token")
        const response=await fetch(`api/communities/${id}/posts`,
            {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            },
               body: JSON.stringify({
             title: title,
             content:Content

        })

        })
        const data=await response.json()
        console.log(data)
        return data

    } 
    )

export const getposts=(async(id)=>
    {
        const token=localStorage.getItem("token")
        
        const response=await fetch(`api/communities/${id}/posts`,
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })

export const getcurrPost=(async(id)=>
    {
        const token=localStorage.getItem("token")
        
        const response=await fetch(`api/posts/${id}`,
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })
export const postcomment=(async(id,text)=>
    {
        const token=localStorage.getItem("token")
        const response=await fetch(`api/posts/${id}/comments`,
            {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            },
               body: JSON.stringify({
             content: text 
        })


        })
        const data=await response.json()
        console.log(data)
        return data

    } 
    )
    export const viewCurrCommunity=(async(id)=>
    {
        const token=localStorage.getItem("token")
        
        const response=await fetch(`api/communities/${id}`,
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })
export const leavecommunity=(async(id)=>
    {
        const token=localStorage.getItem("token")
        
        const response=await fetch(`api/communities/${id}/leave`,
            {
                method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            }

            }
        )
        const data=await response.json()
        console.log(data)
        return data
        
    })
export const viewcomments=(async(id)=>
    {
        const token=localStorage.getItem("token")
        const response=await fetch(`api/posts/${id}/comments`,
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            },


        })
        const data=await response.json()
        console.log(data)
        return data

    } 
    )
export const getJoinedCommunitieses=(async()=>
    {
        const token=localStorage.getItem("token")
        const response=await fetch(`api/communities/joined`,
            {
                method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 2. Attach the token as a Bearer token
                'Authorization': `Bearer ${token}` 
            },


        })
        const data=await response.json()
        console.log(data)
        return data

    } 
    )