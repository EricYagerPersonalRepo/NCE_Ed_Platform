import { NotificationType } from "@/src/API";
import { amplifyApiClient } from "@/src/functions/AuthX";
import { createBroadcastNotification } from "@/src/graphql/mutations";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const WebAdministrativeView = () => {
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState<NotificationType>(NotificationType.MESSAGE)

  const handleCreateNotification = async (event:any) => {
    event.preventDefault();

    try {
     await amplifyApiClient.graphql({
        query: createBroadcastNotification, 
        variables: { input: 
            {
                title:title, 
                targetStudent: "",
                message:message, 
                type:type 
            }
        }
    })
      alert('Notification created successfully')
      // Reset form
      setMessage('');
      setType(NotificationType.MESSAGE);
    } catch (error) {
      console.error('Error creating notification:', error);
      alert('Failed to create notification');
    }
  }
    return(
        <form onSubmit={handleCreateNotification}>
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                margin="normal"
            />
            <TextField
                fullWidth
                label="Message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Type</InputLabel>
                <Select
                value={type}
                onChange={(e) => setType(e.target.value as NotificationType)} // Cast to NotificationType
                label="Type"
                required
                >
                {/* Map enum values to menu items */}
                {Object.values(NotificationType).map((typeValue) => (
                    <MenuItem key={typeValue} value={typeValue}>
                    {typeValue}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Create Notification
            </Button>
        </form>
    )
}

export default WebAdministrativeView