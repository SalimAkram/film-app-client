const addFrame = async (framePayload, id) => {
  try {
    const response = await fetch(`/api/v1/rolls/${id}/frames/new`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(framePayload)
      
    })

    if (!response.ok) {
      if (response.status === 422) {
        const body = await response.json()
        return { errors: body.errors }
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
    } else {
      return response
    }
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
}

export default addFrame;