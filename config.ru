require 'sinatra/base'

class Leegstandscan < Sinatra::Base
  get '/' do
    redirect to('/index.html')
  end

  post '/details' do
    "Yo"
  end
end

run Leegstandscan
