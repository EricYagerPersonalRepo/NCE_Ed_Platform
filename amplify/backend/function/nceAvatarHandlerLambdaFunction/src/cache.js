const cache = {};

// Sets an item in the cache with an expiration time (in milliseconds)
exports.setCache = async (key, value, ttl = 3600000) => { // Default TTL of 1 hour
    const expireAt = Date.now() + ttl;
    cache[key] = { value, expireAt };
};

// Retrieves an item from the cache, considering expiration
exports.getCache = async (key) => {
    const item = cache[key];
    if (item && Date.now() < item.expireAt) {
        return item.value;
    } else {
        // Optionally clean up expired item
        delete cache[key];
        return null;
    }
};

/**
 * Tech Debt:
 * This will work temporarily for a low userbase
 * 
 * TODO: Implement elasticache
 */
