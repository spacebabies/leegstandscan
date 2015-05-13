require 'sinatra/base'
require "google/api_client"
require "google_drive"

class Leegstandscan < Sinatra::Base
  get '/' do
    redirect to('/index.html')
  end

  post '/details' do
    session = GoogleDrive.login_with_oauth(ENV['GOOGLE_DRIVE_ACCESS_TOKEN'])
    ws = session.spreadsheet_by_key(ENV['SPREADSHEET_KEY']).worksheets[0]
    ws.list.push({"email" => "me@example.com"})
    ws.save
  end
end

run Leegstandscan
