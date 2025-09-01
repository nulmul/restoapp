
// For now, we'll create a mock Supabase client to prevent crashes
// You can replace this with actual Supabase configuration later

export const supabase = {
  from: (table: string) => ({
    insert: async (data: any[]) => {
      // Mock implementation - just log the data for now
      console.log('Mock reservation submission:', data);
      return { data: data, error: null };
    }
  })
};
