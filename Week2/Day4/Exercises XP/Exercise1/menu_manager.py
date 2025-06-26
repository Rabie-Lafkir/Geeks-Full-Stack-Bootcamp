from menu_item import cursor, connection
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (name,))
        result = cursor.fetchone()
        if result:
            return MenuItem(*result)
        return None

    @classmethod
    def all_items(cls):
        query = "SELECT item_name, item_price FROM Menu_Items"
        cursor.execute(query)
        return cursor.fetchall()
