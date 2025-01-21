let connectedUserId: string = "null";

export const setConnectedUserId = (id: string) => {
    connectedUserId = id;
}

export const getConnectedUserId = (): string => {
    return connectedUserId;
}
