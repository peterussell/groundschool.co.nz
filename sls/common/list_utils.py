from random import randrange

def get_random_items(items, desired_count):
    if desired_count >= len(items):
        return items

    # Loop and select a random item until we have the desired number of items
    selected_items = []
    for i in range(desired_count):
        index = randrange(len(items))
        selected_items.append(items.pop(index))

    return selected_items
