export const shoppingList: string[] = ['Milk', 'Bread', 'Eggs', 'Butter', 'Cheese'];

interface ITaskData {
    taskId: number;
    assign: string;
    priority: number;
    createdAt: string;
}

export const taskData: ITaskData = {
    taskId: 1,
    assign: 'Diego',
    priority: 1,
    createdAt: '2023-01-01T10:00:00Z'
}