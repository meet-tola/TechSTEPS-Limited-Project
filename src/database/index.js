// Access to Database
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dpdbkqkvteuumqbaawxi.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZGJrcWt2dGV1dW1xYmFhd3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NzIyOTEsImV4cCI6MjAxNzA0ODI5MX0.2FPKVhySZ0Vo6UhEpKTOAPrLvavZ5dEQk3ZIYlyB1JE"
export const supabase = createClient(supabaseUrl, supabaseKey)
