const promises = allRoles.map(async ({ chatSpaceId, adminIds, ownerId }) => {
    if (ownerId) {
        await redis.set(this.getOwnerKey(chatSpaceId), ownerId);
    }
    if (adminIds?.length) {
        await redis.sadd(this.getAdminKey(chatSpaceId), ...adminIds);
    }
});
await Promise.all(promises);

note: why inside await ? because you are not returning a promise to wait outer(await Promise.all(promises)) this will success immediatly thats why


// best version both inner task in parallel
const promises = allRoles.map(({ chatSpaceId, adminIds, ownerId }) => {
    const tasks = [];

    if (ownerId) {
        tasks.push(redis.set(this.getOwnerKey(chatSpaceId), ownerId));
    }

    if (adminIds?.length) {
        tasks.push(redis.sadd(this.getAdminKey(chatSpaceId), ...adminIds));
    }

    return Promise.all(tasks);// it will return array of promise that is expected in return 
});

await Promise.all(promises);
