package com.dailycodework.lakesidehotel.controller;

import com.dailycodework.lakesidehotel.service.BookingService;
import com.dailycodework.lakesidehotel.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bookings")
public class BookedRoomController {

    @Autowired
    private final BookingService bookingService;

    @Autowired
    private final RoomService roomService;
}
