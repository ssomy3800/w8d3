while nums_left > 0
    print 'please provide a number'
    input = gets.chomp
    current_sum += input
    nums_left -= 1
end
    return current_sum
end