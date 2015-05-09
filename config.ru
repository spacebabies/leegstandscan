require 'sinatra'

get '/' do
  redirect to('/index.html')
end

post '/details' do
  "Yo"
end

run Sinatra::Application
